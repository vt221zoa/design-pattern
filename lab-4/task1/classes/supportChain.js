const SupportHandler = require('./SupportHandler');
const Level1SupportHandler = require('./LevelsSupportHandlers/Level1SupportHandler');
const Level2SupportHandler = require('./LevelsSupportHandlers/Level2SupportHandler');
const Level3SupportHandler = require('./LevelsSupportHandlers/Level3SupportHandler');
const Level4SupportHandler = require('./LevelsSupportHandlers/Level4SupportHandler');

const supportChain = new Level1SupportHandler(
    new Level2SupportHandler(
        new Level3SupportHandler(
            new Level4SupportHandler()
        )
    )
);

module.exports = supportChain;