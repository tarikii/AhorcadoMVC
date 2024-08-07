using AhorcadoMVC.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace AhorcadoMVC.Controllers
{
    public class GameController : Controller
    {
        [HttpGet]
        public IActionResult Game(GameViewModel viewModel)
        {
            Random random = new Random();
            int randomIndex = random.Next(viewModel.Words.Count);

            viewModel.RandomWord = viewModel.Words[randomIndex].ToUpper();

            viewModel.WordLetters = viewModel.RandomWord.ToList();

            return View(viewModel);
        }
    }
}
