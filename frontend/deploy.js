import fs from "fs-extra";

// Paths to source and destination files
const builtJsPath = "./dist/assets/index_built.js";
const builtHtmlPath = "./dist/index.html";
const destJsPath = "../backend/static/index_built.js";
const destHtmlPath = "../backend/templates/index.html";

async function deploy() {
  try {
    // Copy built JS file
    await fs.copy(builtJsPath, destJsPath);
    console.log("Copied built JS file to the static folder.");

    // Read the built HTML file
    let html = await fs.readFile(builtHtmlPath, "utf-8");

    // Generate the script tag with the dynamic filename
    const scriptTag = `<script src="{{ url_for('static', filename='${destJsPath
      .split("/")
      .pop()}') }}"></script>`;

    // Replace the script tag in the HTML
    html = html.replace('<script src="index_built.js"></script>', scriptTag);

    // Write the modified HTML file
    await fs.writeFile(destHtmlPath, html);
    console.log(
      "Copied built HTML file to the templates folder and updated the script tag."
    );

    console.log("Deployment completed successfully.");
  } catch (error) {
    console.error("An error occurred during deployment:", error);
  }
}

deploy();
