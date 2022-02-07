# formBot.js

Make your form to work

If form is submited, all form data are send to you as telegram Message

## Simple Usage

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
    <script src="formBot.js" ></script>
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