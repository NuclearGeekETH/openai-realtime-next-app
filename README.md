# OpenAI Realtime Console - Next.js Version

The OpenAI Realtime Console offers an interactive and enriched API reference for the OpenAI Realtime API. This Next.js project integrates utilities like the [openai/openai-realtime-api-beta](https://github.com/openai/openai-realtime-api-beta) as a **Reference Client** for both browsers and Node.js environments, alongside audio management tools for easy browser-based interaction.

## Getting Started

This application is a Next.js project. It provides a modern framework for server-side rendering and static site generation, facilitating a seamless development experience.

### Prerequisites

- **Node.js 14.x or later**: Ensure you have an updated version of Node.js.
- **npm**: Node Package Manager, installed with Node.js.

### Installation

Clone the repository and install dependencies:

```bash
$ git clone https://github.com/NuclearGeekETH/openai-realtime-next-app.git
$ cd openai-realtime-next-app
$ npm install
```

### Running the Application

Start the Next.js development server:

```bash
$ npm run dev
```

Visit `http://localhost:3000` to access the console.

### Relay Server (Optional)

To utilize a server relay with your application:

```bash
$ npm run relay
```

Configure `.env` with your OpenAI API key to use the relay server:

```plaintext
OPENAI_API_KEY=your_openai_api_key_here
```

In `app/page.tsx`, modify the server URL configuration as needed:

```javascript
// Use this for connecting to a local relay server
// const USE_LOCAL_RELAY_SERVER_URL = 'http://localhost:8081';
const USE_LOCAL_RELAY_SERVER_URL = undefined;
```

## Features

### Console Usage

- **Access**: Requires an OpenAI API key with Realtime API access.
- **Connection**: Initiate sessions with microphone usage.
- **Modes**: Switch between &quot;manual&quot; (Push-to-talk) and &quot;vad&quot; (Voice Activity Detection).

#### Enabled Functions

- `get_weather`: Obtain weather information based on location.
- `set_memory`: Utilize the model’s memory capabilities for storing information.

### Realtime API Reference Client

Integrate the latest client seamlessly in any React or Node.js project. For full usage details, visit the [GitHub repository](https://github.com/openai/openai-realtime-api-beta).

#### Example Usage

```javascript
import { RealtimeClient } from '/src/lib/realtime-api-beta/index.js';

const client = new RealtimeClient({ apiKey: process.env.OPENAI_API_KEY });
await client.connect();
client.sendUserMessageContent([{ type: 'text', text: `How are you?` }]);
```

### WavTools

Includes tools for handling PCM16 audio streams within the browser, both for recording and playback.

#### Quickstart for WavRecorder

```javascript
import { WavRecorder } from '/src/lib/wavtools/index.js';

const wavRecorder = new WavRecorder({ sampleRate: 24000 });
// Setup and start recording via API methods
```

## Acknowledgements

Thank you for exploring the Next.js version of the OpenAI Realtime Console. This is a clone of OpenAI's React version: [https://github.com/openai/openai-realtime-console](https://github.com/openai/openai-realtime-console).

- [OpenAI Developers](https://x.com/OpenAIDevs)
