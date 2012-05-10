
testClass 'HelperLoader', ->
    feature 'Loading order', ->
        should 'load the helpers before the specs.', ->
            expect(true).toBeTruthy()
            # will fail to parse the spec if the helper was not loaded first
