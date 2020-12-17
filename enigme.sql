-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le :  jeu. 17 déc. 2020 à 23:08
-- Version du serveur :  5.7.26
-- Version de PHP :  7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `enigme`
--

-- --------------------------------------------------------

--
-- Structure de la table `enigmes`
--

CREATE TABLE `enigmes` (
  `ID_enigme` int(10) NOT NULL,
  `enigme` text NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `zoom` double NOT NULL,
  `lien_image` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `enigmes`
--

INSERT INTO `enigmes` (`ID_enigme`, `enigme`, `latitude`, `longitude`, `zoom`, `lien_image`) VALUES
(1, 'Arrete ! c’est ici l’empire de la mort ! Qui suis-je ? ', 48.83635050434787, 2.3312772624284253, 15, 'https://www.decouvrir-le-monde.fr/wp-content/uploads/2018/04/catacombes.jpg'),
(2, 'Quiconque boit cette eau aura encore soif !', 48.846444299571075, 2.360591751251665, 18, 'https://i.pinimg.com/originals/e9/29/40/e92940140daebabafa0d04484fe59a56.jpg'),
(3, 'Je suis la sortie!', 48.84491119588211, 2.3213763423622984, 22, 'https://www.planet.fr/files/styles/diapo_aspect_switcher/public/images/diaporama/0/5/3/60350/1148012-inline.jpg?itok=km0FIAuf'),
(4, 'Je suis une legende ! Ou peut-etre pas ! ', 48.8751179825712, 2.3537410234015224, 25, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/P1300843_Paris_X_rue_de_Paradis_n18_detail_rwk.jpg/250px-P1300843_Paris_X_rue_de_Paradis_n18_detail_rwk.jpg'),
(5, 'On m’appelle la veuve noire ! Qui suis-je', 48.87289570424288, 2.355723610737265, 28, 'https://www.etaletaculture.fr/wp-content/uploads/2015/05/la-celebre-empoisonneuse-la-voisin.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `réponses`
--

CREATE TABLE `réponses` (
  `ID_reponse` int(11) NOT NULL,
  `ID_enigme` int(10) NOT NULL,
  `numero` int(11) NOT NULL,
  `reponse` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `juste` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `réponses`
--

INSERT INTO `réponses` (`ID_reponse`, `ID_enigme`, `numero`, `reponse`, `juste`) VALUES
(1, 1, 1, 'Les invalides', 0),
(2, 1, 2, 'Linteau', 1),
(3, 1, 3, 'Trocadero', 0),
(4, 1, 4, 'Charles de Gaulle Etoile', 0),
(5, 2, 1, 'La seine', 0),
(6, 2, 2, 'L\'ile de la cite', 0),
(7, 2, 3, 'Paris plage', 0),
(8, 2, 4, 'La fontaine de la samaritaine', 1),
(9, 3, 1, 'Porte de Clignancourt', 0),
(10, 3, 2, 'Galerie de sortie', 1),
(11, 3, 3, 'Cathedrale de Montmartre', 0),
(12, 3, 4, 'Porte de la villette ', 0),
(13, 4, 1, 'Tour Eiffel ', 0),
(14, 4, 2, 'Les invalides', 0),
(15, 4, 3, 'La cave aux vampires', 1),
(16, 4, 4, 'La cave perdue', 0),
(17, 5, 1, 'La voisine empoisonneuse et sorciere', 1),
(18, 5, 2, 'Les martyres de la Premiere Guerre mondiale', 0),
(19, 5, 3, 'Les veuves de la marche de la revolution', 0),
(20, 5, 4, 'Les contes fees de Paris ', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `enigmes`
--
ALTER TABLE `enigmes`
  ADD UNIQUE KEY `ID_enigme` (`ID_enigme`);

--
-- Index pour la table `réponses`
--
ALTER TABLE `réponses`
  ADD PRIMARY KEY (`ID_reponse`),
  ADD KEY `ID_enigme` (`ID_enigme`) USING BTREE;

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `réponses`
--
ALTER TABLE `réponses`
  MODIFY `ID_reponse` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `réponses`
--
ALTER TABLE `réponses`
  ADD CONSTRAINT `réponse_fk` FOREIGN KEY (`ID_enigme`) REFERENCES `enigmes` (`ID_enigme`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
