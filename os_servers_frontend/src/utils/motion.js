export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0
        }
      }
    }
  }
  

export const fadeIn = (direction,type,delay,duration)=>{
  return{
    hidden:{
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
      y: direction === 'up'   ? 20 : direction === 'down'  ? -20 :0,
      opacity : 0
    },
    show: {
      x: 0,
      y: 0,
      opacity :1,
      transition: {
        type:type,
        delay: delay,
        duration :duration,
        ease: 'easeOut'
      }
    }
  }
}