import Video from "../models/Video";

export const home = async(req, res) => {
    try{
        const videos = await Video.find({});
        console.log("videos", videos);
        return res.render("home", { pageTitle: "Home", videos });
    } catch {
        return res.render("server-error");
    }
}
export const watch = (req, res) => {
    const { id } = req.params;
    return res.render("watch", { pageTitle: `Watching ${video.title}` });
}
export const getEdit = (req, res) => {
    const { id } = req.params;
    res.render("edit", { pageTitle: `Editing: ${video.title}`});
}
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    console.log(req.body)
    return res.redirect(`/videos/${id}`);
}
export const getUpload = (req, res) => {
    console.log(req.params);
    return res.render("upload", {pageTitle: "Upload Video"});
}
export const postUpload = (req, res) => {
    console.log(req.body);
    const { title } = req.body;
    videos.push(newVideo);
    // here we will add a video to the videos array.
    return res.redirect("/");
}
export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => res.send("delete video");