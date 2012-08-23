begin
  require 'bundler/setup'
rescue LoadError
  puts "Couldn't find Bundler!"
  puts
  puts "Please run:"
  puts "   gem install bundler"
  puts
  puts "...and then try again."
  puts
  exit
end

# dependencies
require 'json'
require 'rspec/core/rake_task'
require 'uglifier'

# helper module
require File.expand_path('./lib/gl-matrix', File.dirname(__FILE__))
include GLMatrix

# finally... rake tasks!
desc "tag and release gl-matrix"
task :release do
  require 'thor'
  Bundler.ui = Bundler::UI::Shell.new(Thor::Shell::Basic.new)
  Bundler.ui.debug! if ENV['DEBUG']

  # Sanity check: rebuild files just in case dev forgot to.
  # If so, files will change and release will abort since changes
  # were not checked in.
  Rake::Task['build'].invoke

  release do
    # Put other release-related stuff here, such as publishing docs;
    # if anything fails, gl-matrix will be untagged and not pushed.
    #
    # Example:
    #
    #   Rake::Task['doc:publish'].invoke
    #
  end
end

desc "compile & minify sources into a single file"
task :build do
  compile
  minify
end

desc "run test suite with node.js"
task :node => :build do
  # make sure jasmine-node exists, and barf if it doesn't
  if %x['jasmine-node'] =~ /USAGE/
    unless system 'jasmine-node', base_path.join('spec').to_s
      raise "node.js tests failed"
    end
  else
    puts "jasmine-node is not available"
    puts
    puts "Please run:"
    puts "   npm install -g jasmine-node"
    puts
    puts "...and then try again."
    puts
    exit
  end
end

desc "Run continuous integration tests"
RSpec::Core::RakeTask.new('jasmine:ci' => :build) do |t|
  t.rspec_opts = ["--colour", "--format", ENV['JASMINE_SPEC_FORMAT'] || "progress"]
  t.verbose = true
  t.rspec_opts += ["-r #{base_path.join('lib/gl-matrix')}"]
  t.pattern = [Jasmine.runner_filepath]
end

desc "Run specs via server"
task :jasmine do
  port = ENV['JASMINE_PORT'] || 8888
  puts "your tests are here:"
  puts "  http://localhost:#{port}/"
  Jasmine::Server.new(port).start
end

task :default => ['node', 'jasmine:ci']
