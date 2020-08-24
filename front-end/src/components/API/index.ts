export const fetchTimeLine = async (url: string) => {
    try {
        const response = await fetch(`http://localhost:8000/recevingcare/${url}`)
        .then(res => res.json())
        .then(resp => resp);
        return await response;
    }   catch (err) {
        return err;
    }
};