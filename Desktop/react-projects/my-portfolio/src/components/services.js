import React from "react";
import { motion } from "framer-motion";
const Services = () => {
  //! Framer motion animation
  const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="section services">
      <motion.div
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item} className="box">
          <h2> انا هنا بجانبك </h2>{" "}
          <p>
            هل تبحث عن مطور مواقع ويب؟ انا هنا لخدمتك ومنحك تجربة جميله
            وباحترافية عاليه وذات خبرة تقدم خدمات عالية الجودة لتلبية احتياجات
            عملك.{" "}
          </p>{" "}
        </motion.div>{" "}
        <motion.div variants={item} className="box">
          <h2> تصميمك المستقبلي </h2>{" "}
          <p>
            نحن نقدم تصميم عالي الجودة مع التركيز على التوافق المستقبلي.تعد
            التخطيطات عالية الاستجابة والتوافق عبر المستعرضات هي القاعدة.{" "}
          </p>{" "}
        </motion.div>{" "}
        <motion.div variants={item} className="box">
          <h2> كيف يمكنني أن أقدم المساعدة؟ </h2>{" "}
          <p>
            مهما كانت متطلباتك - من إنشاء موقع ويب بسيط من صفحة واحدة إلى تطوير
            موقع للتجارة الإلكترونية - فإن السيد كود هو الرجل المفضل لديك!
          </p>{" "}
        </motion.div>{" "}
        <motion.div variants={item} className="box">
          <h2> شريك موثوق </h2>{" "}
          <p>
            أنا ماهر للغاية في HTML5 و CSS3 و Bootstrap و JavaScript و jQuery
            والمزيد.لدي سجل حافل في تقديم أعمال عالية الجودة في الوقت المحدد، في
            كل مرة.{" "}
          </p>{" "}
        </motion.div>{" "}
        <motion.div variants={item} className="box">
          <h2> إنشاء مواقع ويب جميلة </h2>{" "}
          <p>
            نقوم بإنشاء مواقع ويب جميلة باستخدام أحدث معايير الترميز وأنماط
            التصميم الجيدة بحب واهتمام.لا داعي للقلق بشأن أي شيء - فنحن نعتني
            بكل شيء!
          </p>{" "}
        </motion.div>{" "}
      </motion.div>{" "}
    </div>
  );
};

export default Services;
