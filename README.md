<p align="center">
  <a href="http://munio.cloud/" target="blank"><img src="docs/munio-logo.svg" width="200" alt="Munio Logo" /></a>
</p>

<p align="center">a virtual assistant that helps users improve their conversation skills through voice practice sessions</p>

## Description

Munio is a virtual assistant that functions as a teacher of English to help users improve their conversation skills through voice practice sessions.

Using the Gemini, Munio generates phrases for a section based on the information provided by the user. After this, the user responds to tasks in the section via audio, where the Gemini performs analyses, identifying improvements in pronunciation and speech to help the user get better each time.

After completing the session, a final report is generated, highlighting areas where the user can improve their conversation skills.

In addition to the virtual assistant provided by the Gemini, we also have a system for uploading and authenticating users.

This is a public version of the frontend-end application and the backend-end can be found here: [web-server](https://github.com/muniocloud/web-server).

## Installation

```bash
npm ci
```

## Running the app

```bash
# development
npm run start

# production
npm run build
# serve the application
serve -s dist/web-client/browser

```

## Application Structure Highlights

- Back-end (Integration with AI, Authentication, Uploads, etc): **[web-server](https://github.com/muniocloud/web-server)**
- Markdown to HTML: Markdown-it
- Audio Visualization: WaveSurfer
- Audio Recording: RecordRTC
- Framework: Angular 18
- UI: Angular Material 3

## Stay in touch

- Author - [Gabriel Sena](https://gabrielsena.dev)
- Website - [https://munio.cloud](https://munio.cloud/)

## License

[MIT licensed](LICENSE).
