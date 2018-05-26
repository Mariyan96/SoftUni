<?php

namespace MDProjectBundle\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use MDProjectBundle\Entity\Article;
use MDProjectBundle\Form\ArticleType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ArticleController extends Controller
{
    /**
     * @param Request $request
     * @Route("article/create", name="article_create")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function create(Request $request)
    {
        $article = new Article();
        $form=$this->createForm(ArticleType::class ,$article);
        $form->handleRequest($request);
        if($form->isSubmitted())
        {
            $article->setAuthor($this->getUser());
            $em = $this->getDoctrine()->getManager();
            $em->persist($article);
            $em->flush();
            return $this->redirectToRoute('blog_index');
        }
        return $this->render('article/create.html.twig',
            array('form'=>$form->createView()));

    }
    public function indexAction($name)
    {
        return $this->render('',array('name'=>$name));
    }

    /**
     * @param $id
     * @Route("/articles/details/{id}", name="article_details")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function detailsGet($id)
    {
        $article=$this->getDoctrine()->getManager()->getRepository(Article::class)->find($id);
        return $this->render('article/details.html.twig',['article'=>$article]);

    }

    /**
     * @param $id
     * @Route("/articles/edit/{id}", name="article_edit")
     * @return Response
     */
    public function editArticle(Request $request,$id)
    {
        $article=$this
            ->getDoctrine()
            ->getRepository(Article::class)
            ->find($id);
        $form=$this->createForm(ArticleType::class,$article);
        $form->handleRequest($request);
        $currentArticleAuthor=$article->getAuthor();
        $currentUser=$this->getUser();
        if($currentUser==$currentArticleAuthor)
        {
            if ($form->isSubmitted() && $form->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $em->merge($article);
                $em->flush();
                return $this->redirectToRoute('blog_index');
            }
            return $this->render('article/edit.html.twig',
                ['article'=>$article,'form'=>$form->createView()]);
        }
        else {
            return $this->redirectToRoute('blog_index');
        }

    }
    /**
     * @param $id
     * @Route("/articles/delete/{id}", name="article_delete")
     * @return Response
     */
    public function deleteArticle(Request $request,$id)
    {
        $article=$this
            ->getDoctrine()
            ->getRepository(Article::class)
            ->find($id);
        $form=$this->createForm(ArticleType::class,$article);
        $form->handleRequest($request);
        $currentArticleAuthor=$article->getAuthor();
        $currentUser=$this->getUser();
        if($currentArticleAuthor==$currentUser)
        {
            if($form->isSubmitted())
            {
                $em = $this->getDoctrine()->getManager();
                $em->remove($article);
                $em->flush();
                return $this->redirectToRoute('blog_index');
            }
            return $this->render('article/delete.html.twig',
                ['article'=>$article,'form'=>$form->createView()]);
        }
        else{
            return $this->redirectToRoute('blog_index');
        }

    }

}
