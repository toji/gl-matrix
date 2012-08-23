require 'sprockets'
require 'jasmine'

class Jasmine::Config
  def simple_config_file
    File.expand_path GLMatrix.base_path.join('spec/jasmine.yml')
  end
end

class Rack::Jasmine::Runner
  alias_method :jasmine_call, :call
  def call(env)
    GLMatrix.compile 'gl-matrix.js', 'lib/gl-matrix.js'
    jasmine_call env
  end
end

module GLMatrix
  module_function

  def sprockets
    env = Sprockets::Environment.new base_path
    env.append_path base_path.join('src')
    env
  end

  def base_path
    Pathname.new File.expand_path('..', File.dirname(__FILE__))
  end

  # Compiles the source file to the dest file. If a block
  # is given, the source file is yielded and replaced with
  # the result. Returns the destination as a Pathname.
  def compile(source, dest)
    dest = base_path.join dest
    js = sprockets[source]
    js = yield js if block_given?

    File.open dest, "w" do |f|
      f.puts js
    end

    puts "compiled #{source} to #{dest.relative_path_from base_path}"
    dest
  end

  def minify(source, dest)
    dest = compile source, dest do |js|
      Uglifier.compile js
    end

    puts "minified #{source} to #{dest.relative_path_from base_path}"
  end

end
