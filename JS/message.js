var APP_ID = 'g9BU8IFKBiTxMMcD1t9H28wq-gzGzoHsz';
var APP_KEY = 'r6aVOt2EUgu7pctuGrf2tkfY';
//初始化
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
var query = new AV.Query('Message');
query.find()
    .then(
        function (messages) {
        console.log(messages)
        let array = messages.map((item) => item.attributes)

        array.forEach((item) => {

            let li = document.createElement('li')
            li.innerText = `${item.name}: ${item.content}`
            let messageList = document.querySelector('#messageList')
            messageList.appendChild(li)

            console.log('1')
        })
        console.log(array)
        }
    )
    
console.log('aaaa')

let myform = document.querySelector('#Postmessageform')
myform.addEventListener('submit', function (xx) {
    xx.preventDefault()
    let content = myform.querySelector('input[name=content]').value
    let name = myform.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        name:name,
        content: content
    }).then(function (object) {
        console.log(object)
         let li = document.createElement('li')
            li.innerText = `${object.attributes.name}: ${object.attributes.content}`
            let messageList = document.querySelector('#messageList')
            messageList.appendChild(li)
    })
})

// //创建 TestObject表
// var TestObject = AV.Object.extend('TestObject');
// //在 表中创建一行数据
// var testObject = new TestObject();
// //数据内容是 words：‘Hello World!’
// //如果保存成功，则运行alert
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   console.log(arguments[0])
// })