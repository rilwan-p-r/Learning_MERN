function call(name,callback){
    console.log('Helo '+name)
    callback()
}
function saybye(){
    console.log('Goodbye')
}
call('alice',saybye)