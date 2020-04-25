---
layout: post
title:  "Mobile Application Pilot - W01 Notes"
date:   2020-04-25 00:12:20 -0500
categories: programming school wdd330
---

*The original markdown copy of [these notes can be viewed here](https://dmoster.github.io/byui/wdd330/w01/w01.md).*

## Remembering Users' Info
**Lee S. Barney, *Doing Stuff with Web Things* section 2.3**

### Load a story from `localStorage` into the editor
```javascript
function loadStory() {
  // Get the name of the story to load
  var storyName = document.getElementById('name_input').value
  
  // Get the contents of the story with key storyName from localStorage
  var storyHTML = localStorage.getItem(storyName)

  // Put the contents of the story in the editor
  document.getElementById('story_editor').value = storyHTML
}
```

### Save a story from the editor to `localStorage`
```javascript
function saveStory() {
  // Get the name of the story to save
  var storyName = document.getElementById('name_input').value
  // Get the contents of the story from the editor
  var storyHTML = document.getElementById('story_editor').value

  // Save the name-contents key-value pair in localStorage
  localStorage.setItem(storyName, storyHTML)
}
```

### Display the currently-loaded HTML-formatted story
```javascript
function displayStory() {
  // Get the contents of the story from the editor
  var storyHTML = document.getElementById('story_editor').value

  // Set the contents of the story_display section to storyHTML
  document.getElementById('story_display').innerHTML = storyHTML
}
```


My version of [the full exercise can be viewed here](https://dmoster.github.io/byui/wdd330/w01/).


### Section Questions
How long do items saved in `localStorage` last?

What security limitations are involved, if any?


***
## Master Mobile UX
**Kray Mitchell, *sitepoint***

### How to Improve UX by Understanding Users

- Be there.
- Be useful.
- Be quick.
- Make things reachable.

#### Increasing Speed for Users
- Reduce image usage
  - Use SVG/webfonts where possible
- Optimize and minify CSS and JavaScript files
- GZIP files to eliminate unnecessary data usage


### Better Mobile UX with Strategic Menu Design

- Put primary controls on the bottom!
  - Improves reachability
  - Creates a perception of speed
  - Improves engagement rates
  - Increases user satisfaction
- Consider labeling with words instead of icons


### Designing Intuitive and Mobile-Friendly Forms

- Display labels inside inputs
- Make fields taller
- Use float labels
- Use as few fields as possible
  - Use checkboxes to let users choose what to supply
    - i.e. If they have a preference for phone or email contact, only ask for the one they prefer
  - If forms must be long, consider pagination
    - If paginated, use a progress indicator
- Enable autocomplete on forms
- Don't hide passwords by default, but give users the option to hide them
- Create single-field, JavaScript-driven credit card info inputs
  - Make it look like one field for number, expiration date, CVV, and ZIP code
  - Auto-advance to next field
- Present users with the best keyboard
- List phones in anchor tags rather than as text


### Designing a Better Mobile Advertising User Experience

- "The pop-up is one of the most detested things on the web outside of auto-playing video and audio."
- If ads are inside content, make them small and simple
- If you want a large ad, make a small, expandable version rather than one that takes up a huge portion of the screen off the bat
- Try video ads
- Do **not** use pop-ups
- "Your content should come first."


### Section Questions
How much JavaScript is it reasonable to expect the average mobile device to handle?