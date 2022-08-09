import * as React from 'react';
import { Message } from '../pages';
import styles from '../styles/Home.module.css';

type ChatBubbleProps = {
  message: Message;
};

const ChatBubble = ({ message }: ChatBubbleProps) => {
  const isMe = message.name === 'me';

  const alignment = isMe ? 'flex-end' : 'flex-start';
  const bubbleClass = isMe ? styles.bubble_right : styles.bubble_left;

  return (
    <div className={styles.chat_bubble} style={{ alignItems: alignment }}>
      <p className={styles.message_name}>{message.name}</p>
      <p className={`${styles.message_text} ${bubbleClass}`}>{message.text}</p>
      <p className={styles.message_time}>{message.createdAt}</p>
    </div>
  );
};

export default ChatBubble;
