export const tg = window.Telegram.WebApp;
export const onToggle = () => {
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.show();
    }
}