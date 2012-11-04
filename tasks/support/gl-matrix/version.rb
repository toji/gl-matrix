module GLMatrix
  module Version
    MAJOR, MINOR, PATCH, REL = *File.read(base_path.join 'VERSION').split(".")
    STRING = [MAJOR, MINOR, PATCH, REL].compact.join '.'
  end

  VERSION = Version::STRING
end
