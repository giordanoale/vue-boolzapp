var app = new Vue({
    el: "#root",
    data: {
        newSearch: "",
        newMessage: "",
        contactActive: 0,
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Anna',
                avatar: 'img/avatar_9.jpg',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]
        
    },
    methods: {
        addMessage: function(){
            if (this.newMessage != ""){
                var now = dayjs();
                var objMessage = {};
                objMessage.date = dayjs().format('DD/MM/YYYY HH:mm:ss');
                objMessage.message = this.newMessage;
                objMessage.status = 'sent';
                this.contacts[this.contactActive].messages.push(objMessage);
                this.newMessage = "";
                setTimeout(this.answer, 1000);
            }
        },
        answer: function(){
            var now = dayjs();
            var ansMessage = {};
            ansMessage.date = dayjs().format('DD/MM/YYYY HH:mm:ss');
            ansMessage.message = 'Ok';
            ansMessage.status = 'received';
            this.contacts[this.contactActive].messages.push(ansMessage);
        },
        searchContact: function(){
            for (var i = 0; i < this.contacts.length; i++) {
                let smallSearch = this.newSearch.toLowerCase();
                let smallName = this.contacts[i].name.toLowerCase();
                if (smallName.includes(smallSearch)) {
                    this.contacts[i].visible = true;
                } else {
                    this.contacts[i].visible = false;
                }
            }
        }
    }
    
});
