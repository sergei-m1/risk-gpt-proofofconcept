import fs from "fs-extra";
import { readdirSync } from "fs";

// Paths to source and destination files
const builtJsDir = "./dist/assets";
const builtHtmlPath = "./dist/index.html";
const destStaticDir = "../backend/static";
const destTemplatesDir = "../backend/templates";

async function postBuild() {
  try {
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
}

postBuild();
