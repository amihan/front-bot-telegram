const tg = window.Telegram.WebApp;

export function useTelegram() {

    const onClose = () => {
        tg.close()
    }

    // const onToggleButton = () => {
    //     if(tg.MainButton.isVisible) {
    //         tg.MainButton.hide();
    //     } else {
    //         tg.MainButton.show();
    //     }
    // }




    // if (tg.initDataUnsafe?.user?.channels) {
    //     const channels = tg.initDataUnsafe?.user?.channels;
        
        
    //     channels.forEach(channel => {
    //         console.log('ID канала:', channel.id);
    //         console.log('Название канала:', channel.title);
    //         console.log('Тип канала:', channel.type);
    //     });
    // } 


    return {
        onClose,
        // onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id,
        channels: tg.initDataUnsafe?.user?.channels
    }
}