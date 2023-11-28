import { findByProps } from "@vendetta/metro";
import { instead } from "@vendetta/patcher";

let unpatch: () => any;

export default {
    onLoad: () => {
            const MessageContent = findByProps("message", "timestamp");

                    unpatch = instead("show", MessageContent, (args, original) => {
                                const messageId = args?.[0]?.message?.id;

                                            // Add your logic to track who read the message using the messageId

                                                        // For example, you might want to log it or send the information somewhere
                                                                    console.log(`Message with ID ${messageId} was read by someone.`);

                                                                                // Continue with the original behavior
                                                                                            original(...args);
                                                                                                    });
                                                                                                        },
                                                                                                            onUnload: () => {
                                                                                                                    unpatch?.();
                                                                                                                        }
                                                                                                                        };
