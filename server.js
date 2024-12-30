import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import cors from "cors";
import colors from "colors";
import errorHandler from "./middleware/error.js"; // Middleware d'erreurs


// Route Files
import bootcamps from './routes/bootcamps.js'
//AVB
import avbArticles from './routes/articles/avbArticles.js'
import avbClasses from './routes/classes/avbClasses.js'
import avbFournisseurs from './routes/fournisseurs/avbFournisseurs.js'
import avbClients from './routes/clients/avbClients.js'
import avbFactures from './routes/factures/avbFactures.js'
import avbFactureDetails from './routes/factureDetails/avbFactureDetails.js'
import avbTiers from './routes/tiers/avbTiers.js'
//AW
import awArticles from "./models/bases/AW/AwArticle.js";
import awClasses from './routes/classes/avbClasses.js'
import awFournisseurs from './routes/fournisseurs/awFournisseurs.js'
import awClients from './routes/clients/awClients.js'
import awFactures from './routes/factures/awFactures.js'
import awFactureDetails from './routes/factureDetails/awFactureDetails.js'
import awTiers from './routes/tiers/awTiers.js'
//DQ
import dqArticles from './routes/articles/dqArticles.js'
import dqClasses from './routes/classes/dqClasses.js'
import dqClients from './routes/clients/dqClients.js'
//FMB
import fmbArticles from './routes/articles/fmbArticles.js'
import fmbClasses from './routes/classes/fmbClasses.js'
import fmbClients from './routes/clients/fmbClients.js'
//HD
import hdArticles from './routes/articles/hdArticles.js'
import hdClasses from './routes/classes/hdClasses.js'
import hdClients from './routes/clients/hdClients.js'
//KONE
import koneArticles from './routes/articles/koneArticles.js'
import koneClasses from './routes/classes/koneClasses.js'
import koneClients from './routes/clients/koneClients.js'
//KOUMAC
import koumacArticles from './routes/articles/koumacArticles.js'
import koumacClasses from './routes/classes/koumacClasses.js'
import koumacClients from './routes/clients/koumacClients.js'

//LD
import ldArticles from './routes/articles/ldArticles.js'
import ldClasses from './routes/classes/ldClasses.js'
import ldClients from './routes/clients/ldClients.js'

//LEBROUSSARD
import leBroussardArticles from './routes/articles/leBroussardArticles.js'
import leBroussardClasses from './routes/classes/leBroussardClasses.js'
import leBroussardClients from './routes/clients/leBroussardClients.js'

//MEARE
import meareClasses from './routes/classes/meareClasses.js'
import meareArticles from './routes/articles/meareArticles.js'
import meareClients from './routes/clients/meareClients.js'

//PAITABRICOLAGE
import paitaBricolageClasses from './routes/classes/paitaBricolage.js'
import paitaBricolageArticles from './routes/articles/paitaBricolage.js'
import paitaBricolageClients from './routes/clients/paitaBricolageClients.js'

//QC
import qcClasses from './routes/classes/qcClasses.js'
import qcArticles from './routes/articles/qcArticles.js'
import qcClients from './routes/clients/qcClients.js'

//SITEC
import sitecClasses from './routes/classes/sitecClasses.js'
import sitecArticles from './routes/articles/sitecArticles.js'
import sitecClients from './routes/clients/sitecClients.js'

//VKP
import vkpClasses from './routes/classes/vkpClasses.js'
import vkpArticles from './routes/articles/vkpArticles.js'
import vkpClients from './routes/clients/vkpClients.js'






// Configuration des variables d'environnement
dotenv.config({path: './config/config.env'});



const app = express()

// Body parser 
app.use(express.json())


// Connexion à la base de données MongoDB
connectDB();



// Configuration des logs pour le mode développement
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }



// Mount Routers 

app.use('/api/v2/bootcamps', bootcamps)

// AVB ROUTES
app.use('/api/v2/avb/articles', avbArticles)
app.use('/api/v2/avb/classes', avbClasses)
app.use('/api/v2/avb/fournisseurs', avbFournisseurs)
app.use('/api/v2/avb/clients', avbClients)
app.use('/api/v2/avb/factures', avbFactures)
app.use('/api/v2/avb/facture-details', avbFactureDetails)
app.use('/api/v2/avb/tiers', avbTiers)
// AW ROUTES
app.use('/api/v2/aw/articles', awArticles)
app.use('/api/v2/aw/classes', awClasses)
app.use('/api/v2/aw/fournisseurs', awFournisseurs)
app.use('/api/v2/aw/clients', awClients)
app.use('/api/v2/aw/factures', awFactures)
app.use('/api/v2/aw/facture-details', awFactureDetails)
app.use('/api/v2/aw/tiers', awTiers)
// DQ ROUTES
app.use('/api/v2/dq/classes', dqClasses)
app.use('/api/v2/dq/articles', dqArticles)
app.use('/api/v2/dq/clients', dqClients)
// FMB ROUTES
app.use('/api/v2/fmb/classes', fmbClasses)
app.use('/api/v2/fmb/articles', fmbArticles)
app.use('/api/v2/fmb/clients', fmbClients)

// HD ROUTES
app.use('/api/v2/hd/classes', hdClasses)
app.use('/api/v2/hd/articles', hdArticles)
app.use('/api/v2/hd/clients', hdClients)

// KONE ROUTES
app.use('/api/v2/kone/classes', koneClasses)
app.use('/api/v2/kone/articles', koneArticles)
app.use('/api/v2/kone/clients', koneClients)

// KOUMAC ROUTES
app.use('/api/v2/koumac/classes', koumacClasses)
app.use('/api/v2/koumac/articles', koumacArticles)
app.use('/api/v2/koumac/clients', koumacClients)

// LD ROUTES
app.use('/api/v2/ld/classes', ldClasses)
app.use('/api/v2/ld/articles', ldArticles)
app.use('/api/v2/ld/clients', ldClients)

// LEBROUSSARD ROUTES
app.use('/api/v2/leBroussard/classes', leBroussardClasses)
app.use('/api/v2/leBroussard/articles', leBroussardArticles)
app.use('/api/v2/leBroussard/clients', leBroussardClients)

// MEARE ROUTES
app.use('/api/v2/meare/classes', meareClasses)
app.use('/api/v2/meare/articles', meareArticles)
app.use('/api/v2/meare/clients', meareClients)

// PAITABRICOLAGE ROUTES
app.use('/api/v2/paitaBricolage/classes', paitaBricolageClasses)
app.use('/api/v2/paitaBricolage/articles', paitaBricolageArticles)
app.use('/api/v2/paitaBricolage/clients', paitaBricolageClients)

// QC ROUTES
app.use('/api/v2/qc/classes', qcClasses)
app.use('/api/v2/qc/articles', qcArticles)
app.use('/api/v2/qc/clients', qcClients)

// SITEC ROUTES
app.use('/api/v2/sitec/classes', sitecClasses)
app.use('/api/v2/sitec/articles', sitecArticles)
app.use('/api/v2/sitec/clients', sitecClients)

// VKP ROUTES
app.use('/api/v2/vkp/classes', vkpClasses)
app.use('/api/v2/vkp/articles', vkpArticles)
app.use('/api/v2/vkp/clients', vkpClients)


// Gestionnaire d'erreurs global (toujours en dernier !)
app.use(errorHandler);




const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
