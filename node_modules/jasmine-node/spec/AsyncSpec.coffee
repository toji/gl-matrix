#=============================================================================
# Async spec, that will be time outed
#=============================================================================
describe 'async', ->
  it 'should be timed out', ->
    waitsFor (-> false), 'MIRACLE', 500

