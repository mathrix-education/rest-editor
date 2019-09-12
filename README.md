# @mathrix/rest-editor

REST Editor is a data viewer and editor.

It has been created by Julien Schneider <julien@mathrix.fr>.  
It was extracted and transformed as a library by Clément Despiney <clement@mathrix.fr>.

## Project Structure

This repo contains a library (rest-editor) and a library usage demonstration (rest-editor-demo).

Both are located in the `src/` folder. Compiled lib will be located in the dist folder, that is not pushed. See Build section for more information on this.

### Build

Run `ng build rest-editor` to build the library. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Demo
Run `ng serve rest-editor-demo` for a working demonstration server (with edition disabled since there is no back-end server).
You should run `build` before, see above.

Navigate to `http://localhost:4200/`.
The app uses mock data from the upcoming SpaceX launches.

## How to use

### Requirements

To work, rest-editor needs the following data:

#### displayedColumns

This array of strings defines what has to be shown or not. If policy allows edition, its last string should be 'actions'.

#### dataSource

This is the data that's going to be shown and editable (depending on the policy used, see above). It is a rxjs observable type.

In `rest-editor-demo`, it is mocked by the `of()` keyword, to simulate an observable from local data.

#### policy

This defines the data changing actions allowed. It follows the interface policy defined in `rest-editor/interfaces/policy-editor.interface.ts`.

For example in `rest-editor-demo`, all is set to `true`, and is editable with the sliding buttons at the top.

#### isLoading

Defaults to `false`, this only tells if the component should wait for the data to load before rendering.
