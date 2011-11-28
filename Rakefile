require 'bundler'
Bundler.setup

require 'jasmine'
load 'jasmine/tasks/jasmine.rake'

def red(message)
  "\e[31m#{message}\e[0m"
end

def green(message)
  "\e[32m#{message}\e[0m"
end

desc "Run Jasmine unit tests under node.js"
task :node do
  # Note that we run node_helper instead of the entire suite.
  # This is because we want the individual specs to be environment
  # agnostic, and if they have to require(glMatrix) they will break
  # in web browsers. The helper takes care of bootstrapping glMatrix
  # and loading the suite.
  base = File.dirname(__FILE__)
  if system("NODE_PATH=$NODE_PATH:#{base} "               \
            "node_modules/jasmine-node/bin/jasmine-node " \
            "spec/node_helper.js")
    puts green("Jasmine completed successfully under node")
  else
    raise red("Jasmine failed under node")
  end
end

desc "Run Jasmine unit tests under node.js, then again under Firefox"
task :default => :node do
  ENV['DISPLAY'] = ':99.0' # for firefox on travis
  Rake::Task['jasmine:ci'].invoke
end
