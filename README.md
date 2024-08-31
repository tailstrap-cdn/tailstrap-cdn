
# tailstrap

**Tailstrap** is a experiment to see how  combining multiple CSS Frameworks together would look.

## Features

- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Bootstrap**: Popular CSS framework for responsive design and components.
- **Modern Normalize**: Provides a consistent baseline for styling across browsers.
- **Normalize.css**: Ensures consistent rendering of HTML elements across browsers.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/linuxfandudeguy/tailstrap.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd tailstrap
   ```

3. **Install Dependencies**

   Tailstrap uses [npm](https://www.npmjs.com/) to manage dependencies. Install them with:

   ```bash
   npm install
   ```

## Usage

1. **Include CSS File**

   Tailstrap’s combined CSS file is located in the `dist` directory. Include it in your HTML to apply the styles:

   ```html
   <link rel="stylesheet" href="dist/tailstrap.css">
   ```

2. **Include JavaScript Files**

   All required JavaScript files are available in the root directory. Include them in your HTML:

   ```html
   <script src="jquery.js"></script>
   <script src="popper.js"></script>
   <script src="bootstrap.js"></script>
   ```

   If you prefer to bundle them together, ensure the following line is included:

   ```html
   <script src="dist/bundle.js"></script>
   ```

3. **Customizing Tailstrap**

   Customize Tailstrap by modifying the configuration files in the `src` directory. Rebuild the project to apply changes:

   ```bash
   npx webpack
   ```

## Configuration

- **Webpack Configuration**: Customize the Webpack configuration in `webpack.config.js` to include or exclude specific JavaScript or CSS files.
- **Tailwind Configuration**: Adjust the Tailwind CSS configuration in `tailwind.config.js` to modify default styles or add custom utilities.

## Contributing

Contributions to Tailstrap are welcome! To contribute:

1. **Fork the Repository**
2. **Create a New Branch**

   ```bash
   git checkout -b feature-branch
   ```

3. **Make Your Changes**
4. **Commit Your Changes**

   ```bash
   git add .
   git commit -m "Describe your changes"
   ```

5. **Push to Your Fork**

   ```bash
   git push origin feature-branch
   ```

6. **Create a Pull Request**

   Open a pull request from your fork to the `main` branch of the original repository.

## License

Tailstrap is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the [LICENSE](LICENSE) file for details.


