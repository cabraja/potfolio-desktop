import Icon from "./Icon"
import resume from '../../assets/images/resume-small.jpg'
import info from '../../assets/images/info.png'
import skills from '../../assets/images/skills.png'
import folder from '../../assets/images/folder.png'
import contact from '../../assets/images/contact.png'
// HOOKS
import useResumeWindow from "../../hooks/useResumeWindow"
import useAboutWindow from "../../hooks/useAboutWindow"
import useSkillsWindow from "../../hooks/useSkillsWindow"
import useProjectsWindow from "../../hooks/useProjectsWindow"
import useContactWindow from "../../hooks/useContactWindow"


function Desktop() {

  const resumeWindow = useResumeWindow()
  const aboutWindow = useAboutWindow()
  const skillsWindow = useSkillsWindow()
  const projectsWindow = useProjectsWindow()
  const contactWindow = useContactWindow()

  return (
    <div className="
    w-fit
    text-white
    grid
    grid-cols-2
    gap-4
    p-6
    ">
        <Icon title={'My Resume'} image={resume} onClick={resumeWindow.onOpen}/>
        <Icon title={'About Me'} image={info} onClick={aboutWindow.onOpen}/>
        <Icon title={'Skills'} image={skills} onClick={skillsWindow.onOpen}/>
        <Icon title={'My Projects'} image={folder} onClick={projectsWindow.onOpen}/>
        <Icon title={'Contact'} image={contact} onClick={contactWindow.onOpen}/>
    </div>
  )
}

export default Desktop