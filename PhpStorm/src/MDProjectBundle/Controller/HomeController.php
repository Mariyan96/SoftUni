<?php

namespace MDProjectBundle\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use MDProjectBundle\Entity\Article;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class HomeController extends Controller
{
    /**
     * @Route("/",name="blog_index")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexAction()
    {

            $articles = $this->getDoctrine()->getRepository(
                Article::class)->findAll();
        if(isset($_GET['sort']) && isset($_GET['order']))
        {
            if ($_GET['sort']=='title')
            {
                $em = $this->getDoctrine()->getManager();
                $articles = $em->getRepository('MDProjectBundle:article')->findBy(array(),array('title' => 'ASC'));
            }
            if ($_GET['sort']=='dateCreated')
            {
                $em = $this->getDoctrine()->getManager();
                $articles = $em->getRepository('MDProjectBundle:article')->findBy(array(),array('dateCreated' => 'ASC'));
            }
        }
        return $this->render('blog/index.html.twig', [
            'articles' => $articles
        ]);

    }
}

