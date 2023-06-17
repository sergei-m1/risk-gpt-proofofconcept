// This function is intended to be run after npm run build
// This function automates the postbuild process so that files are ready for Flask to be used
// It will copy static file js files from dist into backend static folder
// It will also copy index.html from dist into backend templates folder. It will update the source tag to pick up the correct index.js
// This function will run automatically if "npm run build" is run (refer to package.json where predefined postbuild hook is assigned)
import fs from "fs-extra";
import { readdirSync } from "fs";

// Paths to source and destination files
const builtJsDir = "./dist/assets";
const builtHtmlPath = "./dist/index.html";
const destStaticDir = "../backend/static";
const destTemplatesDir = "../backend/templates";

const postBuild = async () => {
  try {
    console.log("Starting postbuild");

    // Read the built JS directory
    const files = readdirSync(builtJsDir);

    // Find the JavaScript file with the dynamic filename
    const jsFile = files.find(
      (file) => file.startsWith("index-") && file.endsWith(".js")
    );

    if (!jsFile) {
      throw new Error("No built JavaScript file found.");
    } else {
      console.log("Found built JavaScript file:", jsFile);
    }

    // Paths to the dynamic JavaScript file and destination files
    const builtJsPath = `${builtJsDir}/${jsFile}`;
    const destJsPath = `${destStaticDir}/${jsFile}`;

    // Copy the built JS file to the static folder
    await fs.copy(builtJsPath, destJsPath);
    console.log("Copied built JS file to the static folder.");

    // Read the built HTML file
    let html = await fs.readFile(builtHtmlPath, "utf-8");

    // Generate the script tag with the dynamic filename
    const scriptTag = `<script src="{{ url_for('static', filename='${destJsPath
      .split("/")
      .pop()}') }}"></script>`;

    // Move the script tag from head to body
    html = html.replace(/<script[^>]*><\/script>/, "");
    html = html.replace("</body>", `${scriptTag}\n</body>`);

    // Write the modified HTML file
    const destHtmlPath = `${destTemplatesDir}/${builtHtmlPath
      .split("/")
      .pop()}`;
    await fs.writeFile(destHtmlPath, html);
    console.log(
      "Copied built HTML file to the templates folder and updated the script tag."
    );

    console.log("Deployment completed successfully.");
  } catch (error) {
    console.error("An error occurred during deployment:", error);
  }
};

postBuild();
