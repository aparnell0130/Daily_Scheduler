# Daily_Scheduler

## Description
This application will allow you to store your daily tasks, between the hours of 9am to 5pm, as needed. It is designed for traditional American business hours.
### Instructions
__Save Task:__
1. Select the hour's textarea you would like to enter task
2. Type in the task you would like to assign
3. Click the save button to the right of the selected text area
    - Once you have clicked save if your refresh the page you will still see the stored data.

__Remove Task:__
1. Select textarea you would like to clear
2. Highlight text by using CTRL+A 
    - Once you have highlighted the text, press backspace or delete on your keyboard
3. Once the text is clear from textarea click the save button to the right of selected area

__Note:__
- You do not need to _Remove Text_ to enter a new task. Simply highlight text, enter new task then click save. Your new task will be set.


### Tools/Technologies
- JavaScript
- HTML
- CSS

### Local Storage Object
```JS
// create object from local storage keys and values
var storageObject = {
    storageKey: Object.keys(localStorage),
    storageValue: Object.values(localStorage)
}

```
## Live game link
- [Daily Schedule](https://aparnell0130.github.io/Daily_Scheduler/)

![ALT Text](assets/images/schedule.gif)

## License
MIT License

Copyright (c) [2020] [Aaron Parnell]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Author Info
- Linkedin - [Aaron Parnell](https://www.linkedin.com/in/aaron-parnell-1ab4661b3/)
- Github - [aparnell0130](https://github.com/aparnell0130)

[Back to top](#Daily_Scheduler)