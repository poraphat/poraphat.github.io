//Start of Menu Button
//Primary Drop Down
document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-menu-button]")
    if (!isDropdownButton && e.target.closest('[data-menu]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-menu]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-menu].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})
//Secondary Drop Down
document.addEventListener('click', e => {
    const isPageList2 = e.target.matches("[data-secondpage-button]")
    if (!isPageList2 && e.target.closest('[data-secondpage]') != null) return

    let currentPageList2
    if (isPageList2) {
        currentPageList2 = e.target.closest('[data-secondpage-button]')
        currentPageList2.classList.toggle('active')
    }

    document.querySelectorAll("[data-secondpage-button].active").forEach(secondpage => {
        if (secondpage === currentPageList2) return
        secondpage.classList.remove('active')
    })
})
//End of Menu Button


//Sound Button
var soundButtons = document.querySelectorAll('.SoundButton');

soundButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var soundFile = this.getAttribute('data-sound');
    var sound = new Audio(soundFile);

    if (sound.paused) {
      sound.play();
      this.disabled = true; // Disable the button while the sound is playing
      this.style.animation = 'Pulsing 500ms infinite'; // Apply animation
      this.style.backgroundColor = '#DFFB91'; // Change color when sound starts playing

      sound.addEventListener('ended', function() {
        button.disabled = false; // Enable the button when the sound finishes playing
        button.style.animation = ''; // Remove animation
        button.style.backgroundColor = ''; // Reset color when sound finishes playing
      });
    }
  });
});
//End of Sound Button


//Scenario Choice Button
//Choice Button 1
document.addEventListener('click', e => {
    const isChoiceButton1 = e.target.matches("[data-choice-button1]")
    if (!isChoiceButton1 && e.target.closest('[data-choice1]') != null) return

    let currentResultBox
    if (isChoiceButton1) {
        currentResultBox = e.target.closest('[data-choice1]')
        currentResultBox.classList.toggle('active')
    }

    document.querySelectorAll("[data-choice1].active").forEach(choicebutton1 => {
        if (choicebutton1 === currentResultBox) return
        choicebutton1.classList.remove('active')
    })
})
//Choice Button 2
document.addEventListener('click', e => {
    const isChoiceButton2 = e.target.matches("[data-choice-button2]")
    if (!isChoiceButton2 && e.target.closest('[data-choice2]') != null) return

    let currentResultBox
    if (isChoiceButton2) {
        currentResultBox = e.target.closest('[data-choice2]')
        currentResultBox.classList.toggle('active')
    }

    document.querySelectorAll("[data-choice2].active").forEach(choicebutton2 => {
        if (choicebutton2 === currentResultBox) return
        choicebutton2.classList.remove('active')
    })
})
//End


//Cover of Reality Zone
const coverButton = document.getElementById('Cover_Button');
const coverDiv = document.getElementById('Cover_WholeArea');
const choiceButton1 = document.getElementById('choicebuttonID1');
const choiceButton2 = document.getElementById('choicebuttonID2');
const realityArea = document.getElementById('realityareaID');

coverButton.addEventListener('click', function() {
    coverDiv.style.opacity = '0';
    coverDiv.style.pointerEvents = 'none';
    realityArea.style.opacity = '1';
    realityArea.style.pointerEvents = 'auto';
});
choiceButton1.addEventListener('click', function() {
    coverDiv.style.opacity = '1';
    coverDiv.style.pointerEvents = 'auto';
    realityArea.style.opacity = '0';
    realityArea.style.pointerEvents = 'none';
});
choiceButton2.addEventListener('click', function() {
    coverDiv.style.opacity = '1';
    coverDiv.style.pointerEvents = 'auto';
    realityArea.style.opacity = '0';
    realityArea.style.pointerEvents = 'none';
});
//End


//Start of Reality & Info Zone
//Reality Zone Appear
document.addEventListener('click', e => {
    const isRealityButton = e.target.matches("[data-reality-button]")
    if (!isRealityButton && e.target.closest('[data-reality]') != null) return

    let currentRealityBox
    if (isRealityButton) {
        currentRealityBox = e.target.closest('[data-reality]')
        currentRealityBox.classList.toggle('active')
    }
})
//Info Zone Appear
document.addEventListener('click', e => {
    const isInfoButton = e.target.matches("[data-info-button]")
    if (!isInfoButton && e.target.closest('[data-info]') != null) return

    let currentInfoBox
    if (isInfoButton) {
        currentInfoBox = e.target.closest('[data-info]')
        currentInfoBox.classList.toggle('active')
    }
})
//End