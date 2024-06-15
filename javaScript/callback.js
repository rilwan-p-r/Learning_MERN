function call(name, callback) {
    console.log('Hello ' + name);
    callback();
}

function saybye() {
    console.log('Goodbye');
}

call('alice', ()=> {
    call('bob', ()=> {
        call('charlie', ()=> {
            call('david', ()=> {
                saybye();
            });
        });
    });
});
