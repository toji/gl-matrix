# Pretty much everything here was ripped from Bundler.
# https://github.com/carlhuda/bundler/blob/master/lib/bundler/gem_helper.rb
module GLMatrix::ReleaseHelper
  module_function

  def release
    guard_clean
    guard_already_tagged
    tag_version {
      yield if block_given?
      git_push
    }
  end

  def base
    GLMatrix.base_path.to_s
  end

  def git_push
    perform_git_push
    perform_git_push ' --tags'
    Bundler.ui.confirm "Pushed git commits and tags"
  end

  def perform_git_push(options = '')
    cmd = "git push #{options}"
    out, code = sh_with_code(cmd)
    raise "Couldn't git push. `#{cmd}' failed with the following output:\n\n#{out}\n" unless code == 0
  end

  def guard_already_tagged
    if sh('git tag').split(/\n/).include?(version_tag)
      raise("This tag has already been committed to the repo.")
    end
  end

  def guard_clean
    clean? or raise("There are files that need to be committed first.")
  end

  def clean?
    sh_with_code("git diff --exit-code")[1] == 0
  end

  def tag_version
    sh "git tag -a -m \"Version #{version}\" #{version_tag}"
    Bundler.ui.confirm "Tagged #{version_tag}"
    yield if block_given?
  rescue
    Bundler.ui.error "Untagged #{version_tag} due to error"
    sh_with_code "git tag -d #{version_tag}"
    raise
  end

  def version
    GLMatrix::VERSION
  end

  def version_tag
    "v#{version}"
  end

  def name
    "gl-matrix"
  end

  def sh(cmd, &block)
    out, code = sh_with_code(cmd, &block)
    code == 0 ? out : raise(out.empty? ? "Running `#{cmd}' failed. Run this command directly for more detailed output." : out)
  end

  def sh_with_code(cmd, &block)
    cmd << " 2>&1"
    outbuf = ''
    Bundler.ui.debug(cmd)
    Dir.chdir(base) {
      outbuf = `#{cmd}`
      if $? == 0
        block.call(outbuf) if block
      end
    }
    [outbuf, $?]
  end
end
