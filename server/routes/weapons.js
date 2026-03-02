import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import weaponsData from '../data/weapons.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(weaponsData)
})

router.get('/:weaponId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/weapon.html'))
})

export default router