export const formatDate = (timestamp) => {
    const currentDate = new Date();
    const messageDate = new Date(timestamp);

    if (currentDate.toLocaleDateString('de-DE') === messageDate.toLocaleDateString('de-DE')) {
        return "Heute"; 
    } else {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return messageDate.toLocaleDateString('de-DE', options);
    }
};
