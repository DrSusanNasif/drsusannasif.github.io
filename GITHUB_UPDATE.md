# Update drsusannasif.github.io

This package contains the complete static website. No CV or downloadable professional profile is included.

## Publish through the GitHub website

1. Extract Susan_Nasif_GitHub_Website.zip on your computer.
2. Open https://github.com/DrSusanNasif/drsusannasif.github.io and select the main branch.
3. Choose Add file > Upload files. Upload the extracted website files to the repository's top level, replacing index.html. Do not upload the ZIP itself or place the files inside a new folder.
4. Commit the changes with a message such as "Refresh professional website and public resources". Committing to the configured publishing branch makes the changes public.
5. In Settings > Pages, check the publishing source. For this static site, use Deploy from a branch, main, and / (root). If those settings are already in place, leave them as they are.
6. Check the Actions tab for completion, then open https://drsusannasif.github.io/. Refresh the browser if it still shows the previous design.

The required website files are:
- index.html
- styles.css
- script.js
- evidence-workflow.svg

GITHUB_UPDATE.md is this guide; uploading it is optional. Do not delete unrelated existing repository files.

## Future text changes

Open index.html in GitHub, select the pencil icon, edit the relevant text and commit. styles.css controls the appearance. script.js controls the mobile menu.

## Add a PDF beside a relevant reference

1. Upload the public PDF with a short filename without spaces, for example Study_Title_2026.pdf.
2. In index.html, find the matching project or publication and place a download link after its description:

<a class="text-link" href="Study_Title_2026.pdf" download>Download paper (PDF) <span aria-hidden="true">↓</span></a>

3. Include the title, authors, year and journal or event next to the link. Add the DOI or original source link when available.
4. A larger Downloads & references area is already present. Copy an existing download-card there to add another resource, then update its filename, title, page count and description.

The current public reference links to ORCID. No PDF is bundled. Space remains for future public papers and educational resources with their citations.

## Contact and public downloads

The website contacts are LinkedIn and X. No email address, CV or downloadable professional profile is included. If an older CV or professional-profile PDF is already in the GitHub repository, remove that file separately; uploading this package does not delete existing files or erase Git history.

STaiMIC's full proper name retains "Center"; general prose follows British English.

## GitHub guidance

https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
