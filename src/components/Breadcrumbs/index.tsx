import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './styles'

const Breadcrumbs = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter((segment) => segment !== '');

  const lastSegment = pathSegments[pathSegments.length - 1];
  const lastSegmentWithoutQuery = lastSegment.split('?')[0];
  pathSegments[pathSegments.length - 1] = lastSegmentWithoutQuery;

  const breadcrumbs = pathSegments.map((segment, index) => {
    const cleanedSegment = segment.replace(/-/g, ' ');
    const label = cleanedSegment.charAt(0).toUpperCase() + cleanedSegment.slice(1);
    const path = '/' + pathSegments.slice(0, index + 1).join('/');
    return { label, path };
  });

  return (
    <S.BreadCrumbsList data-testid='breadcrumbs-list'>
      <Link href='/'>
        <S.CrumbHome>
          Home
        </S.CrumbHome>
      </Link>
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <S.CrumbLink data-testid="breadcrumbs-items" key={index}>
            {breadcrumb.label}
          </S.CrumbLink>
        )
      })}
    </S.BreadCrumbsList>
  );
};

export default Breadcrumbs;