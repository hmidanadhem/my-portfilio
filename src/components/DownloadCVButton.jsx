import { motion } from "motion/react";
import { Download } from "lucide-react";
import cvFile from "../assets/assets/cv/Nadhem_Hmida_CV.pdf";

const DownloadCVButton = () => {
  const handleDownload = () => {
    // Créer un lien de téléchargement
    const link = document.createElement('a');
    link.href = cvFile; // Chemin vers votre CV
    link.download = 'Nadhem_Hmida_CV.pdf'; // Nom du fichier téléchargé
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      className="flex items-center gap-3 px-6 py-3 mt-6 text-white transition-all duration-300 border border-white/20 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2, duration: 0.6 }}
    >
      <Download size={20} />
      <span className="font-medium">Download my CV</span>
    </motion.button>
  );
};

export default DownloadCVButton;