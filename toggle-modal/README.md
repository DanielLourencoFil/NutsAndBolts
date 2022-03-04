![Logo of the project](https://github.com/DanielLourencoFil/NutsAndBolts/blob/main/toggle-modal/README-files/CodeErgoSum.png)

## Toggle modal class

This is a project in which I'm making an incursion on JavaScript classes and reusable code.

I coded a class that turn to open and close a modal easier and faster.

## Worth mentioning

    - It permits to add in a very straightforward way toggle functionality to open and close modals.
    - It is suitable for a wide range of modal configurations (give it a try to find out!).
    - It has two different setups for modal transition: SLIDE and POP-UP.
    - It permits set CSS "display = none;" for modal and still makes possible smooth transitions.
    - By doing so, it avoids odd behavior of modal divs when resizing screen width (modal has its transition effect in action).
    - Also avoid odd behavior when using mobiles, on cases users try to snap screen on X axis.
    - (side note: During research I found that those problems should be avoided using css property "overflow-x = hidden" on the body, but some how it didn't work as expected).

## How to use it

### For modal sliding action: default action

### (1) create the modal div, open and close buttons (HTML basic structure)

![New Card Screen](https://github.com/DanielLourencoFil/NutsAndBolts/blob/main/toggle-modal/README-files/html-structure.png)

### (2) css basic styling for modal position

![New Card Screen](https://github.com/DanielLourencoFil/NutsAndBolts/blob/main/toggle-modal/README-files/css-styles.png)

### (3) the elements created at step (1) are selected by their css class or id (it must be passed as a argument when creatiang new Class, i.e., new ToggleModal('#modal', '.open-btn', '#close-btn)).

    - Note: If CSS display value intended for the modal element is different of "block" (default), it must be set manually, i.e., modal.displayOn = "flex". It is necessary for the modal display set in css is "none".

![New Card Screen](https://github.com/DanielLourencoFil/NutsAndBolts/blob/main/toggle-modal/README-files/js%20-%20toggleModal-slide-1.png)

### (4) create new ToggleModal and set start point for sliding action, i.e, newModal.start = 'top';

![New Card Screen](https://github.com/DanielLourencoFil/NutsAndBolts/blob/main/toggle-modal/README-files/js%20-%20toggleModal-start.png)

## Pop-up effect

### (5) For scale action (pop-up) there are some extra setup - 1º STEP

    - First CSS configuraton must be apropriate to pop-up effect, as the image below shows.
    - As the slide action type, it needs display = "none";
    - It needs transform: scale(0);

![New Card Screen](https://github.com/DanielLourencoFil/NutsAndBolts/blob/main/toggle-modal/README-files/js%20-%20toggleModal-scale.png)

### (6) JS configuration for pop-up effect - 2º STEP

    - Inform elements css classes or ids and pass a fourth argument with modal action type: "scale".

![New Card Screen](https://github.com/DanielLourencoFil/NutsAndBolts/blob/main/toggle-modal/README-files/js%20-%20toggleModal-scale-2.png)

### (7) Set translate css values - 3º STEP

![New Card Screen](https://github.com/DanielLourencoFil/NutsAndBolts/blob/main/toggle-modal/README-files/js%20-%20toggleModal-scale-3.png)

### (7) if all is done in the right way, just enjoy your modal appearing on screen!

### (8) feel free to clone it and have fun!

### (9) Sugestions for improvements and bugs finding are very wellcomed!

## Author

- **Daniel Lourenço**: @DanielLourencoFil (https://github.com/DanielLourencoFil)

## View Demo

[Visit the project](https://toggle-modal-generator.netlify.app/)

Thanks to visiting me and good coding!
