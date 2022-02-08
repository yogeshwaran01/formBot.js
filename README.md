# formBot.js

Make your form to work

If form is submited, all form data are send to you as telegram Message

## Qucik Demo

[Click here](https://yogeshwaran01.github.io/formBot.js/) for quick demo

## Simple Usage

```html
<script src="https://cdn.jsdelivr.net/gh/yogeshwaran01/formBot.js@1.2.0/formBot.min.js" ></script>
```

In `index.html`

- Name the id of your form as `formBot`
- set new attribute `names`. value of `names` is name of all input elements eg: `name="name mail message"`. Here name, mail, messgage are the value of `name` attribute of input elements.
- set other attribute `chatId` of your telegram. Get chat id from [Telegram Bot](https://t.me/chatIDrobot).

```html
<form id="formBot" names="name mail message" chatId="104753182211">
    <label for="name">Name</label>
    <input type="text" name="name">
    <label for="mail">Mail</label>
    <input type="text" name="mail">
    <label for="message">Message</label>
    <input type="text" name="message">
    <input type="submit">
</form>
```

- Finally add `script` tag to make the form Work

```html
<script>
    document.getElementById('formBot').onsubmit = (e) =>{
        sendMessage(e)
    }
</script>
```

The full html is

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <script src="https://cdn.jsdelivr.net/gh/yogeshwaran01/formBot.js@1.0.0/formBot.min.js" ></script>
</head>
<body>
    <form id="formBot" names="name mail message" chatId="your_chat_id">
        <label for="name">Name</label>
        <input type="text" name="name">
        <label for="mail">Mail</label>
        <input type="text" name="mail">
        <label for="message">Message</label>
        <input type="text" name="message">
        <input type="submit">
    </form>

    <script>
        document.getElementById('formBot').onsubmit = (e) =>{
            sendMessage(e)
        }
    </script>
</body>
</html>

```

That it, The form is now working

## More Options

### Changing default formId

By default, it targets form with id `formBot`, you can change it with your own id

```js
document.getElementById('your_own_id').onsubmit = (e) =>{
    sendMessage(e, {'formId': 'your_own_id'})
}
```

### Mentioning ChatId

chatId of your telegram can be mention in html or js

```html
<form id="formBot" names="name mail message" chatId="your_chat_id">
```

or

```js
document.getElementById('your_own_id').onsubmit = (e) =>{
    sendMessage(e, {'chatId': 'your_chat_id'})
}

```

## Contributions are welcome

- Report any bugs in issues section
- Create pull request if you fix any bugs or added new fetures
