<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class UserController extends AbstractController
{
    #[Route("/", name: 'app_user')]
    public function index(EntityManagerInterface $entityManager, TranslatorInterface $translator): Response
    {
        $translator->setLocale('pl');
       $users = $entityManager->getRepository(User::class)->findAll();

       return $this->render('user/index.html.twig',  [
           'users'  => $users
       ]);
    }
    #[Route("/en", name: 'app_user_en')]
    public function indexEn(EntityManagerInterface $entityManager, TranslatorInterface $translator): Response
    {
        $translator->setLocale('en');
       $users = $entityManager->getRepository(User::class)->findAll();

       return $this->render('user/index.html.twig',  [
           'users'  => $users
       ]);
    }
}
