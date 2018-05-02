var options = {}

var sideNavElem = document.querySelector('.sidenav')
var sideNavInstance = M.Sidenav.init(sideNavElem, options)

var parallaxElem1 = document.querySelector('#parallax1')
var parallaxInstance1 = M.Parallax.init(parallaxElem1, options)
var parallaxElem2 = document.querySelector('#parallax2')
var parallaxInstance2 = M.Parallax.init(parallaxElem2, options)
var parallaxElem3 = document.querySelector('#parallax3')
var parallaxInstance3 = M.Parallax.init(parallaxElem3, options)

function closeSideNav () {
    if (sideNavInstance.isOpen) {
        sideNavInstance.close()
    }
}