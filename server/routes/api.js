const router=require("express").Router();
const userC=require("../controller/user");

router.get("/",userC.homepageController);
router.post("/contact",userC.userMessageController);


module.exports = router;