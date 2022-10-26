const { Place } = require('../models')
const express = require('express')

const addPlace = async (req, res) => {
  try {
    let newPlace = await Place.create(req.body)
    res.send(newPlace)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPlaces = async (req, res) => {
  try {
    let allPlaces = await Place.find({})
    res.json(allPlaces)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getOnePlace = async (req, res) => {
  const { id } = req.params
  const placeId = await Place.findById(id)
  return res.send({ placeId }).populate('places')
}

const updatePlace = async (req, res) => {
  try {
    let fixPlace = await Place.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(fixPlace)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const removePlace = async (req, res) => {
  try {
    let removedPlace = await Place.findByIdAndDelete(req.params.id, req.body)
    res.json(removedPlace)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getPlaces,
  addPlace,
  updatePlace,
  removePlace,
  getOnePlace
}
