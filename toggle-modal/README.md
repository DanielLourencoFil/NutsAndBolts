![Logo of the project](https://github.com/DanielLourencoFil/NutsAndBolts/blob/main/toggle-modal/README-files/CodeErgoSum.png)

## Toggle modal class

This is a project ib which I'm making a incursion on JavaScript classes and reusable code.

I coded a class that turn open and close a modal esier and faster.

## Worth mentioning

    - It permits to add ina very straithfoward way toggle funcionality to open and close modals.
    - It is suitable for a wide range of modal configurations (give it a try to find out!).
    - It permits set ccs "display = none;" for modal and still make possible smooth transitions.
    - By doing so, it avoids odd behavior of modal divs when resizing screen width (modal has its transition effect in action).
    - Also avoid odd behavior when using mobiles, on cases user try to snap screen on X axis.
    - (side note: During reaserch I found that those problems should be avoided using css property "overflow-x = hidden" on body, but some how it didn't worked as expected).

## How to use it

### (1) create the modal div, open and close buttons (HTML basic structure)

![New Card Screen](https://github.com/DanielLourencoFil/NutsAndBolts/blob/main/toggle-modal/README-files/html-structure.png)

### (2) css basic styling for modal position, i.e., position = absolute; width = 100vw, height = 100vh; left = 0; top = -100vh (hide modal on top direction )

![New Card Screen](https://github.com/DanielLourencoFil/NutsAndBolts/blob/main/toggle-modal/README-files/css-styles.png)

### (3) the elements created at step (1) are selected by their css class or id (it must be passed as a argument when creatiang new Class, i.e., new ToggleModal('#modal', '.open-btn', '#close-btn))

![New Card Screen](https://github.com/DanielLourencoFil/NutsAndBolts/blob/main/toggle-modal/README-files/js%20-%20toggleModal-new.png)

### (4) create new ToggleModal and set start point for sliding action, i.e, newModal.start = 'top';

![New Card Screen](https://github.com/DanielLourencoFil/NutsAndBolts/blob/main/toggle-modal/README-files/js%20-%20toggleModal-start.png)

### (5) if all is done in the right way, just enjoy your modal appearing on screen!

### (6) feel free to clone it and have fun!

### (7) Sugestions for improvments and bug finding are very wellcomed!

## Authors

- **Daniel Lourenço**: @DanielLourencoFil (https://github.com/DanielLourencoFil)

## View Demo

[Visit the project](https://toggle-modal-generator.netlify.app/)

Thanks to visiting me and good coding!
