import { CSS_PREFIX } from './module.js';
import * as utils from './utils.js';

const CSS_CURRENT_SPEAKER = CSS_PREFIX + 'currentSpeaker';

function updateSpeaker() {
  document.getElementById("chat-message").placeholder = ChatMessage.getSpeaker().alias;
}

Hooks.once('renderChatLog', () => {
  updateSpeaker();
});

Hooks.on('controlToken', updateSpeaker);
