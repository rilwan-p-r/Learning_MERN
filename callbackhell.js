doSomething(function(err, result) {
    if (err) {
        handleError(err);
    } else {
        doSomethingElse(result, function(err, result) {
            if (err) {
                handleError(err);
            } else {
                doAnotherThing(result, function(err, result) {
                    if (err) {
                        handleError(err);
                    } else {
                        doFinalThing(result, function(err, result) {
                            if (err) {
                                handleError(err);
                            } else {
                                console.log('All done!');
                            }
                        });
                    }
                });
            }
        });
    }
});
