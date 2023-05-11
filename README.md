# Ask

Ask is a command line utility that uses OpenAI's api to generate text on the command line.

![](https://github.com/minkiha/ask/askdemo.gif)

## Install

```
git clone https://github.com/minkiha/ask.git ~/.ask
sh ~/.ask/install_ask.sh
```

## Setup

1. Get an OpenAI api key
2. Create a .env file inside ~/.ask following the .env.example format
3. Put your key inside the .env file

## Usage

```
ask "insert your text here in quotes"
```

```
echo "insert text" | ask
```

note: when using just
```
ask
```
it will keep stdin open until ctrl-c but note that previous messages are not inserted into the next message so there is no memory of the conversation.

## Coming soon

Saved conversations

