<template>
    <div class="messages-container">
        <div class="chats">
            <p class="pg-title">Messages</p>
            <div class="search-chats">
                <input type="search" placeholder="Search for chats..." class="chat-search-inpt">
                <button class="new-chat">
                    <img src="" alt="">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame">
                            <path id="Vector"
                                d="M18 10C18 10.1658 17.9342 10.3247 17.8169 10.4419C17.6997 10.5592 17.5408 10.625 17.375 10.625H11.125V16.875C11.125 17.0408 11.0592 17.1997 10.9419 17.3169C10.8247 17.4342 10.6658 17.5 10.5 17.5C10.3342 17.5 10.1753 17.4342 10.0581 17.3169C9.94085 17.1997 9.875 17.0408 9.875 16.875V10.625H3.625C3.45924 10.625 3.30027 10.5592 3.18306 10.4419C3.06585 10.3247 3 10.1658 3 10C3 9.83424 3.06585 9.67527 3.18306 9.55806C3.30027 9.44085 3.45924 9.375 3.625 9.375H9.875V3.125C9.875 2.95924 9.94085 2.80027 10.0581 2.68306C10.1753 2.56585 10.3342 2.5 10.5 2.5C10.6658 2.5 10.8247 2.56585 10.9419 2.68306C11.0592 2.80027 11.125 2.95924 11.125 3.125V9.375H17.375C17.5408 9.375 17.6997 9.44085 17.8169 9.55806C17.9342 9.67527 18 9.83424 18 10Z"
                                fill="white" />
                        </g>
                    </svg>
                    <p>Start New Chat</p>
                </button>
            </div>
            <div class="chat-log">
                <div :class="['chat-container', activeHoveredChat == chat.id ? 'active' : '']" v-for="chat in chats"
                    @click="openChat(chat.id)">
                    <div class="chat" @mouseover="activeHoveredChat = chat.id" @mouseleave="activeHoveredChat = ''">
                        <img src="https://images.unsplash.com/photo-1642929193606-4b9f7a5e4f06?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" class="sender-photo">
                        <div class="chat-details">
                            <div class="chat-top">
                                <p class="sender-name">{{ chat.contactName }}</p>
                                <p class="chat-delivery-time">
                                    2h
                                </p>
                            </div>
                            <div class="chat-content">
                                <p class="chat-preview">
                                    {{ chat.messages[chat.messages.length - 1].content }}
                                </p>
                                <!-- <div class="new-message-alert">
                                    <p>2</p>
                                </div> -->
                                <svg :class="['read-receipt', chat.messages[chat.messages.length - 1].isViewed === true ? 'read' : '']"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M14.0259 8.03538L5.62593 16.2854C5.48565 16.4234 5.29676 16.5007 5.09999 16.5007C4.90322 16.5007 4.71433 16.4234 4.57405 16.2854L0.974052 12.7501C0.903816 12.681 0.847871 12.5988 0.809411 12.5081C0.770952 12.4174 0.750731 12.32 0.749904 12.2215C0.749077 12.123 0.76766 12.0253 0.804591 11.934C0.841522 11.8427 0.896079 11.7595 0.965146 11.6893C1.03421 11.619 1.11644 11.5631 1.20713 11.5246C1.29781 11.4862 1.39519 11.466 1.49369 11.4651C1.59219 11.4643 1.6899 11.4829 1.78122 11.5198C1.87254 11.5568 1.95569 11.6113 2.02593 11.6804L5.09999 14.6991L12.975 6.96475C13.117 6.82527 13.3085 6.74789 13.5076 6.74965C13.6061 6.75052 13.7035 6.77079 13.7942 6.80931C13.8849 6.84782 13.9672 6.90383 14.0362 6.97413C14.1053 7.04443 14.1599 7.12764 14.1968 7.21902C14.2337 7.3104 14.2522 7.40815 14.2513 7.5067C14.2505 7.60524 14.2302 7.70265 14.1917 7.79336C14.1532 7.88407 14.0972 7.96631 14.0269 8.03538H14.0259ZM23.0353 6.97413C22.9663 6.90378 22.884 6.84773 22.7933 6.80918C22.7026 6.77063 22.6052 6.75034 22.5066 6.74946C22.4081 6.74859 22.3103 6.76716 22.2189 6.8041C22.1275 6.84104 22.0443 6.89563 21.9741 6.96475L14.0991 14.6991L12.3337 12.9648C12.1918 12.8254 12.0002 12.7481 11.8013 12.75C11.6024 12.7518 11.4123 12.8326 11.273 12.9746C11.1336 13.1166 11.0563 13.3081 11.0582 13.507C11.06 13.706 11.1408 13.896 11.2828 14.0354L13.5731 16.2854C13.7134 16.4234 13.9023 16.5007 14.0991 16.5007C14.2958 16.5007 14.4847 16.4234 14.625 16.2854L23.025 8.03538C23.0954 7.9664 23.1515 7.88423 23.1902 7.79354C23.2288 7.70286 23.2492 7.60545 23.2501 7.50689C23.2511 7.40833 23.2326 7.31054 23.1957 7.21913C23.1589 7.12771 23.1044 7.04446 23.0353 6.97413Z"
                                        fill="#758A89" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="openedChat" :class="['open-chat', showChatTab == true ? 'active' : '']">
            <div class="chat-box-top">
                <div class="chat-box-top-lhs">
                    <img src="https://images.unsplash.com/photo-1642929193606-4b9f7a5e4f06?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="contact profile photo">
                    <div class="contact-info">
                        <p class="contact-name">
                            {{ openedChat.contactName }}
                        </p>
                        <div class="contact-status">
                            <p :class="['dot', 'active']"></p>
                            Active Now
                        </div>
                    </div>
                </div>
                <div class="chat-box-top-rhs">
                    <button class="chat-action">
                        <img src="/icons/audio-call.svg" alt="Audio Call">
                    </button>
                    <button class="chat-action">
                        <img src="/icons/video-call.svg" alt="Video Call">
                    </button>
                    <button v-if="!showChatTab" class="chat-action" @click="toggleChatTab()">
                        <img src="/icons/more.svg" alt="">
                    </button>
                    <button v-if="showChatTab" class="chat-action" @click="toggleChatTab()">
                        <img src="/icons/close.svg" alt="Close Tab">
                    </button>
                </div>
            </div>
            <div class="chat-feed">
                <div :class="['chat-message-dialogue', message.senderId == 1 ? 'lhs' : 'rhs']"
                    v-for="message in openedChat.messages">
                    <img src="https://images.unsplash.com/photo-1642929193606-4b9f7a5e4f06?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="contact profile photo" class="contact-profile-photo">

                    <div class="message-grp">
                        <div v-if="message.contentType == 'text'"
                            :class="['dialogue-box', message.senderId == 1 ? 'lhs' : 'rhs']">
                            <p class="dialogue-box-content">
                                {{ message.content }}
                            </p>
                        </div>
                        <div v-if="message.contentType == 'image'"
                            :class="['image-message', message.senderId == 1 ? 'lhs' : 'rhs']">
                            <img :src="message.content" :alt="message?.fileName">
                        </div>
                        <div v-if="message.contentType == 'voice-note'"
                            :class="['voice-note-player', message.senderId == 1 ? 'lhs' : 'rhs']">

                            <audio controls controlslist="nodownload nofullscreen" preload="auto">
                                <source :src="message.content" type="audio/mp3">
                                Your browser does not support the audio tag.
                            </audio>
                        </div>

                        <p :class="['message-time', message.senderId == 1 ? 'lhs' : 'rhs']">
                            11:34 pm
                        </p>
                    </div>

                </div>
            </div>
            <div class="send-message-box">
                <textarea name="" class="message-input"></textarea>
                <div class="message-actions">
                    <div class="lhs">
                        <button>
                            <img src="/icons/attachment.svg" alt="Add attachment">
                        </button>
                        <button>
                            <img src="/icons/voice-note.svg" alt="Voice note">
                        </button>
                    </div>
                    <img class="send-btn" src="/icons/send-message.svg" alt="Send message">
                </div>
            </div>
        </div>
        <div v-if="openedChat" :class="['chat-tab', showChatTab == true ? 'active' : '']">
            <div class="tab-top">
                <button @click="toggleChatTab()">
                    <img src="/icons/close.svg" alt="Close Tab">
                </button>
            </div>
            <img :src="openedChat?.profilePhoto" class="tab-contact-photo" alt="Contact photo">
            <p class="contact-username">
                @{{ openedChat?.username }}
            </p>
            <hr class="tab-divider">
            <div class="tab-section">
                <div class="section-top" @click="toggleSection(1)">
                    <p class="section-title">
                        Recent Files <span>(25 files)</span>
                    </p>
                    <img :class="['toggle-section', section1 === true ? 'open' : '']" @click="toggleSection(1)"
                        src="/icons/arrow.svg" alt="">
                </div>
                <div class="sect-content">
                    <div class="content-info">
                        <img src="/icons/pdf.svg" alt="pdf">
                        <p>How To Read Like Your Life Depends On It.pdf</p>
                    </div>
                    <div class="content-info">
                        <img src="/icons/pdf.svg" alt="pdf">
                        <p>your-daddy.pdf</p>
                    </div>
                    <div class="content-info">
                        <img src="/icons/pdf.svg" alt="pdf">
                        <p>Content.pdf</p>
                    </div>
                    <p class="sect-content-more">show more</p>
                </div>
            </div>
            <hr class="tab-divider">

            <div class="tab-section">
                <div @click="toggleSection(2)" class="section-top">
                    <p class="section-title">
                        Photos <span>(25 files)</span>
                    </p>
                    <img :class="['toggle-section', section2 === true ? 'open' : '']" @click="toggleSection(2)"
                        src="/icons/arrow.svg" alt="">
                </div>
                <div class="shared-photos">
                    <img src="https://images.unsplash.com/photo-1645620766046-b129a9c5f658" alt="" class="shared-img">
                    <img src="https://images.unsplash.com/photo-1642929392581-e7abec90b81c" alt="" class="shared-img">
                    <img src="https://images.unsplash.com/photo-1642929392581-e7abec90b81c" alt="" class="shared-img">
                    <img src="https://images.unsplash.com/photo-1642929392581-e7abec90b81c" alt="" class="shared-img">
                </div>
                <p class="sect-content-more">show more</p>
            </div>
            <button class="report-btn">
                <img src="/icons/report.svg" alt="">
                Block {{ openedChat?.contactName }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

definePageMeta({
    layout: 'default'
})

const activeHoveredChat = ref()
let section1 = ref(false)
let section2 = ref(false)

let showChatTab = ref(false)
const toggleChatTab = (): void => {
    showChatTab.value === true ? showChatTab.value = false : showChatTab.value = true
}

const toggleSection = (section: number): void => {
    if (section == 1) {
        section1.value === true ? section1.value = false : section1.value = true
    } else {
        section2.value === true ? section2.value = false : section2.value = true
    }
}


interface Chat {
    id: number;
    contactName: string;
    profilePhoto: string;
    isOnline: boolean;
    username: string;
    messages: {
        content: string;
        senderId: number;
        contentType: string;
        isViewed: boolean;
        fileName?: string;
    }[];
}

const chats = ref<Chat[]>([
    {
        id: 232323,
        contactName: 'Jon Bellion',
        profilePhoto:
            'https://images.unsplash.com/photo-1642929193606-4b9f7a5e4f06?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isOnline: false,
        username: "jon.bell",
        messages: [
            {
                content: 'How are ya',
                senderId: 1,
                contentType: 'text',
                isViewed: true,
            },
            {
                content: "I'm Good thanks mate",
                senderId: 2,
                contentType: 'text',
                isViewed: true,
            },
            {
                content: "https://images.unsplash.com/photo-1642929193606-4b9f7a5e4f06",
                fileName: "sapa dey",
                senderId: 2,
                contentType: 'image',
                isViewed: false,
            },
            {
                content: "Great i've got a surprise for you dfdh jbdygr gdfub hgvyfgrf j sfysb uusfdb ycsgds ufdsb jb usgfwuhfg uihgasduifgs jasdghf hdugf jh fd dfdjg dsjgfd uhd fudh fgdhf dj fdfd ygfd fdjfh fud fdjf jgdf dugfd hjgf df",
                senderId: 1,
                contentType: 'text',
                isViewed: true,
            },
            {
                content: "I trust you'd love it",
                senderId: 1,
                contentType: 'text',
                isViewed: false,
            },
            {
                content: "https://images.unsplash.com/photo-1642929193606-4b9f7a5e4f06",
                fileName: "sapa dey",
                senderId: 1,
                contentType: 'image',
                isViewed: false,
            },
            {
                content: "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3",
                senderId: 1,
                contentType: 'voice-note',
                isViewed: true,
            },
            {
                content: "I trust you'd love it",
                senderId: 1,
                contentType: 'text',
                isViewed: false,
            },
            {
                content: "I trust you'd love it",
                senderId: 1,
                contentType: 'text',
                isViewed: false,
            },
            {
                content: "https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3",
                senderId: 2,
                contentType: 'voice-note',
                isViewed: true,
            },
            {
                content: "I trust you'd love it",
                senderId: 1,
                contentType: 'text',
                isViewed: false,
            },
            {
                content: "I trust you'd love it",
                senderId: 1,
                contentType: 'text',
                isViewed: false,
            },
            {
                content: "I trust you'd love it",
                senderId: 1,
                contentType: 'text',
                isViewed: false,
            },
            {
                content: "I'm Good thanks mate",
                senderId: 2,
                contentType: 'text',
                isViewed: true,
            },
            {
                content: "I trust you'd love it",
                senderId: 1,
                contentType: 'text',
                isViewed: false,
            },
            {
                content: "I'm Good thanks mate",
                senderId: 2,
                contentType: 'text',
                isViewed: true,
            },
            {
                content: "I'm Good thanks mate",
                senderId: 2,
                contentType: 'text',
                isViewed: true,
            },
            {
                content: "I'm Good thanks mate",
                senderId: 2,
                contentType: 'text',
                isViewed: true,
            },
            {
                content: "I'm Good thanks mate",
                senderId: 2,
                contentType: 'text',
                isViewed: true,
            },
            {
                content: "I'm Good thanks mate",
                senderId: 2,
                contentType: 'text',
                isViewed: true,
            },
        ],
    },
    {
        id: 242424,
        contactName: 'Sope Adeyemi',
        profilePhoto:
            'https://images.unsplash.com/photo-1642929193606-4b9f7a5e4f06?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isOnline: false,
        username: "mosope.dev",
        messages: [
            {
                content: 'Wagwan mate',
                senderId: 1,
                contentType: 'text',
                isViewed: true,
            },
            {
                content: "I'm Good thanks mate",
                senderId: 2,
                contentType: 'text',
                isViewed: true,
            },
        ],
    },
]);

let openedChat = ref<Chat | null>(null);
let openedChatImages = ref<Chat | null>(null);

const openChat = (chatId: number): void => {
    showChatTab.value = false
    openedChat.value = chats.value.find((chat) => chat.id === chatId) || null;

};

const openedChatimages = (openedChat)


</script>

<style scoped>
.messages-container {
    margin-left: 100px;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    position: relative;
    /* background: rebeccapurple; */
}

.chats {
    width: 22.4vw;
    /* background-color: red; */
    padding: 20px 0 0;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
}

.pg-title {
    color: #329993;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 0 24px 0;
}

.search-chats {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 12px;
    padding: 0 24px 0;
}

.chat-search-inpt {
    width: 100%;
    height: 50px;
    border-radius: 52px;
    border: 1px solid #E3E8E7;
    background: #171C1B;
    padding: 0 20px;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.chat-search-inpt::placeholder {
    /* padding-: 20px; */
    color: #758A88;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.new-chat {
    border-radius: 52px;
    background: #329993;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.new-chat p {
    margin-left: 10px;
}

.chat-log {
    height: 85vh;
    width: 100%;
    /* background-color: rebeccapurple; */
    overflow-y: auto;
}

.chat-container {
    width: 100%;
    padding: 0 24px 0;
    transition: all .5s;
}

.chat-container.active {
    background: #141818;
    border-left: 2px solid #329993;
}

.chat {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0 24px;
    border-bottom: 1px solid #465352;
    /* margin-top: 24px; */
    transition: all .5s;
    cursor: pointer;
}

.sender-photo {
    width: 50px;
    height: 50px;
    border-radius: 30px;
    object-position: center;
    object-fit: cover;
}

.chat-details {
    width: 80%;
    margin-left: 10px;
}

.chat-top,
.chat-content {
    display: flex;
    justify-content: space-between;
}

.chat-content {
    margin-top: 10px;
}

.chat-top .sender-name {
    color: #329993;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.chat-delivery-time {
    overflow: hidden;
    color: #758A89;
    text-overflow: ellipsis;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.chat-preview {
    overflow: hidden;
    color: #ACB9B8;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    /* 128.571% */
    width: 90%;
}

.new-message-alert {
    background-color: red;
    color: #FFF;
    font-size: 10px;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
}

.read-receipt.read path {
    fill: #329993;
}

.open-chat {
    flex: 1;
    height: 100vh;
    background: #141818;
    transition: all .3s;
}

.open-chat.active {
    margin-right: 370px;
    transition: all .5s;
}

.chat-tab {
    transition: all .5s;
    width: 370px;
    height: 100vh;
    overflow-y: auto;
    position: absolute;
    right: -999px;
    padding: 24px;
    border-left: 1px solid #465352;
    background: #171C1B;
}

.chat-tab.active {
    transition: all .5s;
    right: 0;
}

.chat-box-top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #465352;
    display: flex;
    align-items: center;
    padding: 24px 32px;
}

.chat-box-top-lhs {
    display: flex;
    align-items: center;
}

.chat-box-top-lhs img {
    width: 52px;
    height: 52px;
    border-radius: 25px;
    margin-right: 15px;
}

.contact-name {
    color: #329993;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.chat-action {
    margin: 0 5px;
    background: transparent;
    width: 52px;
    height: 52px;
    border-radius: 25px;
    cursor: pointer;
    outline: none;
    border: 1px solid #465352;
}

.chat-action img {
    width: 20px;
}

.contact-status {
    display: flex;
    align-items: center;
    margin-top: 5px;
    overflow: hidden;
    color: #465352;
    text-overflow: ellipsis;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    /* 112.5% */
}

.contact-status .dot {
    border-radius: 20px;
    height: 10px;
    width: 10px;
    background: #00B207;
    margin-right: 15px;
}

.chat-feed {
    width: 100%;
    height: 73vh;
    overflow-y: auto;
    padding: 0 54px;
    transition: all .5s;
}

.contact-profile-photo {
    width: 36px;
    height: 36px;
    border-radius: 18px;
}

.chat-message-dialogue {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
}

.chat-message-dialogue.rhs {
    flex-direction: row-reverse;
}

.dialogue-box {
    padding: 20px;
    color: #FFF;
    width: fit-content;
    max-width: 30vw;
    /* background: #00B207; */
    display: flex;
}

.image-message {
    height: 200px;
    width: 200px;
    border-radius: 10px;
    overflow: hidden;
}

.image-message img {
    height: 200px;
    width: 200px;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
}

.image-message.rhs {
    border: 1px solid #329993;
}

.image-message.lhs {
    border: 1px solid #465352;
}

.dialogue-box.lhs {
    border-radius: 20px 20px 20px 0px;
    background: #465352;
}

.dialogue-box.lhs img {
    margin: 6px;
}

.dialogue-box.rhs {
    border-radius: 20px 20px 0px 20px;
    background: #329993;
}

.dialogue-box-content {
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
}

.message-time {
    margin-top: 18px;
    overflow: hidden;
    color: #758A89;
    text-overflow: ellipsis;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.message-time.rhs {
    float: right;
}

.send-message-box {
    /* width: 80%; */
    /* height: 132px; */
    margin: 0 54px 20px;
    border-radius: 20px;
    border: 1px solid #758A89;
    background: #171C1B;
    overflow: hidden;
}

.message-input {
    width: 100%;
    height: 88px;
    background: transparent;
    padding: 20px;
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    outline: none;
    border: none;
    resize: none;
    caret-color: #00B207;
}

.message-actions {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
    border-top: 1px solid #465352;
}

.message-actions .lhs button {
    background: transparent;
    border: none;
    outline: none;
    border-radius: 2px;
    margin: 0 6px;
    cursor: pointer;
}

.message-actions .lhs button:hover {
    border: .5 solid #465352;
}

.send-btn {
    cursor: pointer;
}

.tab-top {
    width: 100%;
    height: 60px;
}

.tab-top button {
    float: right;
    height: 52px;
    width: 52px;
    border-radius: 40px;
    border: 1px solid #465352;
    outline: none;
    background: transparent;
    cursor: pointer;
}

.tab-contact-photo {
    width: 130px;
    height: 130px;
    object-fit: cover;
    object-position: center top;
    border-radius: 136px;
    border: 6px solid #329993;
    margin: 24px auto 60px;
    display: flex;
    align-items: center;
}

.contact-username {
    text-align: center;
    color: #758A89;
    text-overflow: ellipsis;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    width: 250px;
    margin: auto;
}

.tab-divider {
    border: 1px solid #465352;
    margin: 24px 0;
}

.section-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.section-title {
    color: #329993;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
}

.section-top img {
    cursor: pointer;
}

.section-title span {
    color: #758A89;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.sect-content {}

.content-info {
    display: flex;
    margin: 16px 0;
    align-items: center;
    text-overflow: ellipsis;
}

.content-info img {
    margin-right: 10px;
    cursor: pointer;
}

.content-info p {
    color: #5D6F6D;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-overflow: ellipsis;
    cursor: pointer;
}

.sect-content-more {
    color: #329993;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
}

.shared-photos {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 16px 0;
}

.shared-img {
    width: 99px;
    height: 100px;
    border-radius: 20px;
    object-fit: cover;
    object-position: center top;
    cursor: pointer;
    background: #465352;
}

.report-btn {
    height: 46px;
    width: 100%;
    margin: 25px auto 0;
    border-radius: 52px;
    border: 1px solid #D00;
    color: #D00;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    outline: none;
    cursor: pointer;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all .5s;
}

.report-btn:hover {
    background: #fff;
    color: #D00;
}
.voice-note-player {
      height: 50px;
      border-radius: 6px;
      display: flex;
      align-items: flex-end ;
}
.voice-note-player.lhs {
    background: #465352;
}
.voice-note-player.rhs {
    background: #329993;
}
.voice-note-player::-webkit-progress-bar {
    background-color: #00B207;
}
</style>