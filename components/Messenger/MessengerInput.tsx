'use client';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
const MessengerInput = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  // console.log(input);

  const sendMessage = async () => {
    if (!input) return;
    setIsLoading(true);
    setInput('');
    textareaRef.current?.focus();
    console.log(input);

    // try {
    //   await axios.post('/api/message/send', { text: input, chatId })
    //   setInput('')
    //   textareaRef.current?.focus()
    // } catch {
    // } finally {
    //   setIsLoading(false)
    // }
  };
  useEffect(() => {
    textareaRef.current?.focus();
  }, [textareaRef]);
  return (
    <div className="px-4 pt-4 mb-2 w-full flex flex-row">
      <div className="relative flex-1 flex-row overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 dark:text-white">
        <Textarea
          ref={textareaRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type message..."
          className="block w-full border-0 bg-transparent text-white placeholder:text-white focus:ring-0 sm:py-1.5 sm:text-sm sm:leading-6"
        />

        {input.trim().length > 0 && (
          <div className="absolute right-0 bottom-0 flex justify-between items-center p-3">
            <div className="flex-shrink-0">
              <Button
                onClick={sendMessage}
                type="submit"
              >
                Send
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessengerInput;
